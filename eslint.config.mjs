import { defineConfig, globalIgnores } from "eslint/config";
import * as nextVitalsModule from "eslint-config-next/core-web-vitals.js"; 
import * as nextTsModule from "eslint-config-next/typescript.js";

const eslintConfig = defineConfig([
  ...nextVitals.default, 
  ...nextTs.default,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
