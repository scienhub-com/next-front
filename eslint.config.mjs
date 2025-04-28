import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import { li } from "motion/react-client"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    {
        ignores: [
            "**/node_modules/**",
            "**/.next/**",
            "**/out/**",
            "**/build/**",
            "**/dist/**",
            "**/coverage/**",
            "./src/components/ui/**",
        ],
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                { vars: "all", args: "after-used", ignoreRestSiblings: false },
            ],
            indent: ["error", 4],
            quotes: ["error", "double"],
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "linebreak-style": ["error", "unix"],
        },
    },
    ...compat.extends("next/core-web-vitals", "next/typescript"),
]

export default eslintConfig
