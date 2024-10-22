import axios from "axios";
import { createDecipheriv, createHash } from "crypto";

// Megacloud configuration
const megacloud = {
   script: "https://megacloud.tv/js/player/a/prod/e1-player.min.js?v=",
   sources: "https://megacloud.tv/embed-2/ajax/e-1/getSources?id=",
};

// Main extract function
async function extract(srcsData) {
   try {
      const extractedData = {
         tracks: [],
         intro: {
            start: 0,
            end: 0,
         },
         outro: {
            start: 0,
            end: 0,
         },
         sources: [],
      };

      const encryptedString = srcsData.sources;
      if (!srcsData.encrypted && Array.isArray(encryptedString)) {
         extractedData.intro = srcsData.intro;
         extractedData.outro = srcsData.outro;
         extractedData.tracks = srcsData.tracks;
         extractedData.sources = encryptedString.map((s) => ({
            url: s.file,
            type: s.type,
         }));

         return extractedData;
      }

      const { data } = await axios.get(megacloud.script.concat(Date.now().toString()));
      const text = data;
      if (!text) {
         throw new Error("invalid text");
      }

      const vars = extractVariables(text);
      if (!vars.length) {
         throw new Error("Can't find variables. Perhaps the extractor is outdated.");
      }

      const { secret, encryptedSource } = getSecret(encryptedString, vars);
      const decrypted = await decrypt(encryptedSource, secret);

      const sources = JSON.parse(decrypted);
      extractedData.intro = srcsData.intro;
      extractedData.outro = srcsData.outro;
      extractedData.tracks = srcsData.tracks;
      extractedData.sources = sources.map((s) => ({
         url: s.file,
         type: s.type,
      }));

      return extractedData;
   } catch (error) {
      throw error;
   }
}

// Extract variables from the script text
function extractVariables(text) {
   const regex = /case\s*0x[0-9a-f]+:(?![^;]*=partKey)\s*\w+\s*=\s*(\w+)\s*,\s*\w+\s*=\s*(\w+);/g;
   const matches = text.matchAll(regex);
   const vars = Array.from(matches, (match) => {
      const matchKey1 = matchingKey(match[1], text);
      const matchKey2 = matchingKey(match[2], text);

      try {
         return [parseInt(matchKey1, 16), parseInt(matchKey2, 16)];
      } catch (e) {
         return [];
      }
   }).filter((pair) => pair.length > 0);

   return vars;
}

// Get secret and encrypted source
function getSecret(encryptedString, values) {
   let secret = "",
      encryptedSource = "",
      encryptedSourceArray = encryptedString.split(""),
      currentIndex = 0;

   for (const index of values) {
      const start = index[0] + currentIndex;
      const end = start + index[1];

      for (let i = start; i < end; i++) {
         secret += encryptedString[i];
         encryptedSourceArray[i] = "";
      }
      currentIndex += index[1];
   }

   encryptedSource = encryptedSourceArray.join("");

   return { secret, encryptedSource };
}

// Decrypt function
async function decrypt(encrypted, keyOrSecret, maybe_iv) {
   if (maybe_iv) {
      // AES decryption (when IV is provided)
      const key = createHash("sha256").update(keyOrSecret).digest(); // Hash the key
      const iv = Buffer.from(maybe_iv); // Convert IV to buffer
      const decipher = createDecipheriv("aes-256-cbc", key, iv); // Create decipher instance

      let decrypted = decipher.update(encrypted, "base64", "utf-8");
      decrypted += decipher.final("utf-8");
      return decrypted;
   } else {
      // Custom decryption similar to Node's `crypto` logic
      const cypher = Buffer.from(encrypted, "base64");
      const salt = cypher.subarray(8, 16);
      const password = Buffer.concat([Buffer.from(keyOrSecret, "binary"), salt]);

      const md5Hashes = [];
      let digest = password;
      for (let i = 0; i < 3; i++) {
         const hash = createHash("md5").update(digest).digest();
         md5Hashes[i] = hash;
         digest = Buffer.concat([md5Hashes[i], password]);
      }

      const key = Buffer.concat([md5Hashes[0], md5Hashes[1]]);
      const iv = md5Hashes[2];
      const contents = cypher.subarray(16);

      const decipher = createDecipheriv("aes-256-cbc", key, iv); // Create decipher instance for custom decryption
      let decrypted = decipher.update(contents, "binary", "utf-8");
      decrypted += decipher.final("utf-8");

      return decrypted;
   }
}
// async function decrypt(encrypted, keyOrSecret, maybe_iv) {
//    if (maybe_iv) {
//       // AES decryption (when IV is provided)
//       const key = await crypto.subtle.importKey(
//          "raw",
//          new TextEncoder().encode(keyOrSecret),
//          { name: "AES-CBC", length: 256 },
//          false,
//          ["decrypt"]
//       );
//       const iv = new Uint8Array(maybe_iv);
//       const decrypted = await crypto.subtle.decrypt(
//          { name: "AES-CBC", iv },
//          key,
//          new TextEncoder().encode(encrypted)
//       );
//       return new TextDecoder().decode(decrypted);
//    } else {
//       // Custom decryption similar to Node's `crypto` logic
//       const cypher = new Uint8Array(Buffer.from(encrypted, "base64"));
//       const salt = cypher.subarray(8, 16);
//       const password = Buffer.concat([Buffer.from(keyOrSecret, "binary"), salt]);

//       const md5Hashes = [];
//       let digest = password;
//       for (let i = 0; i < 3; i++) {
//          const hash = await crypto.subtle.digest("MD5", digest);
//          md5Hashes[i] = new Uint8Array(hash);
//          digest = Buffer.concat([md5Hashes[i], password]);
//       }

//       const key = Buffer.concat([md5Hashes[0], md5Hashes[1]]);
//       const iv = md5Hashes[2];
//       const contents = cypher.subarray(16);

//       const aesKey = await crypto.subtle.importKey("raw", key, { name: "AES-CBC" }, false, [
//          "decrypt",
//       ]);
//       const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv }, aesKey, contents);

//       return new TextDecoder().decode(decrypted);
//    }
// }

// Helper function to find matching keys
function matchingKey(value, script) {
   const regex = new RegExp(`,${value}=((?:0x)?([0-9a-fA-F]+))`);
   const match = script.match(regex);
   if (match) {
      return match[1].replace(/^0x/, "");
   } else {
      throw new Error("Failed to match the key");
   }
}

export default extract;
