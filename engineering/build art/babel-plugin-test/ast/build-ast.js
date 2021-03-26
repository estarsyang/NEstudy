{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 28,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 28,
        "test": {
          "type": "BinaryExpression",
          "start": 0,
          "end": 11,
          "left": {
            "type": "Identifier",
            "start": 0,
            "end": 3,
            "name": "foo"
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 7,
            "end": 11,
            "value": null,
            "raw": "null"
          }
        },
        "consequent": {
          "type": "UnaryExpression",
          "start": 14,
          "end": 20,
          "operator": "void",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 19,
            "end": 20,
            "value": 0,
            "raw": "0"
          }
        },
        "alternate": {
          "type": "MemberExpression",
          "start": 21,
          "end": 28,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 24,
            "name": "foo"
          },
          "property": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "bar"
          },
          "computed": false,
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}