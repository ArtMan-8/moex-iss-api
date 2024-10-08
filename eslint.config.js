export default [{
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint", "prettier", "import"],
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:import/recommended",
		"plugin:import/typescript"
	],
	"rules": {
		"no-console": 1,
		"prettier/prettier": "error",
		"sort-imports": [
			"error",
			{
				"ignoreCase": false,
				"ignoreDeclarationSort": true, // don"t want to sort import lines, use eslint-plugin-import instead
				"ignoreMemberSort": false,
				"memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
				"allowSeparatedGroups": true
			}
		],
		"import/order": [
			"error",
			{
				"groups": [
					"builtin", // Built-in imports (come from NodeJS native) go first
					"external", // <- External imports
					"internal", // <- Absolute imports
					["sibling", "parent"], // <- Relative imports, the sibling and parent types they can be mingled together
					"index", // <- index imports
					"unknown" // <- unknown
				],
				"newlines-between": "always",
				"alphabetize": {
					/* sort in ascending order. Options: ["ignore", "asc", "desc"] */
					"order": "asc",
					/* ignore case. Options: [true, false] */
					"caseInsensitive": true
				}
			}
		]
	},
	"ignorePatterns": ["dist"],
	"settings": {
		"import/resolver": {
			"typescript": {
				"project": "./tsconfig.json"
			}
		}
	},
}]
