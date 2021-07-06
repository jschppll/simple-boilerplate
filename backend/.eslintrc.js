module.exports = {
    env : { node : true },

    extends : [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],

    plugins : [ "@typescript-eslint" ],

    parser        : "@typescript-eslint/parser",
    parserOptions : {
        "ecmaVersion" : 12,
        "sourceType"  : "module",
    },

    rules : {
        "array-bracket-newline" : [
            1,
            {
                "multiline" : true,
                "minItems"  : 4,
            },
        ],
        "array-element-newline" : [
            1,
            {
                "multiline" : true,
                "minItems"  : 4,
            },
        ],
        "array-bracket-spacing" : [
            1,
            "always",
            {
                "objectsInArrays" : false,
                "arraysInArrays"  : false,
            },
        ],

        "block-spacing" : [ 1, "always" ],
        "comma-dangle"  : [ 1, "always-multiline" ],
        "indent"        : [ 1, 4 ],
        "key-spacing"   : [
            1,
            {
                beforeColon : true,
                afterColon  : true,
                align       : "colon",
            },
        ],
        "object-curly-newline" : [
            1,
            {
                "multiline"     : true,
                "minProperties" : 3,
                "consistent"    : true,
            },
        ],
        "no-multiple-empty-lines" : [ 1, { max : 1 }],
        "no-multi-spaces"         : [ 1 ],

        "no-trailing-spaces"   : [ 1 ],
        "object-curly-spacing" : [
            1,
            "always",
            {
                "arraysInObjects"  : false,
                "objectsInObjects" : false,
            },
        ],
        "object-property-newline" : [ 1, { allowAllPropertiesOnSameLine : false }],
        "prefer-const"            : [ 1 ],
        "semi"                    : [ 1, "always" ],
        "quotes"                  : [ 1, "double" ],
    },
};
