import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**", "src/__tests__/**"],
  },
  {
    files: ["src/**/*.{ts,js}"], 
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      "no-console": "off", 
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": "warn",
      "preserve-caught-error": "off"
    },
  },
]);