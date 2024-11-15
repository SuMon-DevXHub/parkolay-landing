import tsParser from "@typescript-eslint/parser";
import parser from "@graphql-eslint/eslint-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended").map(config => ({
        ...config,
        files: ["**/*.ts", "**/*.tsx"],
    })),
    {
        files: ["**/*.ts", "**/*.tsx"],

        languageOptions: {
            globals: {},
            parser: tsParser,
        },

        processor: "@graphql-eslint/graphql",
    },
    {
        files: ["**/*.graphql"],

        plugins: {
            "@graphql-eslint": graphqlEslint,
        },

        languageOptions: {
            parser: parser,
        },

        rules: {
            "@graphql-eslint/no-anonymous-operations": "error",

            "@graphql-eslint/naming-convention": ["error", {
                OperationDefinition: {
                    style: "PascalCase",
                    forbiddenPrefixes: ["Query", "Mutation", "Subscription", "Get"],
                    forbiddenSuffixes: ["Query", "Mutation", "Subscription"],
                },
            }],
        },
    },
];