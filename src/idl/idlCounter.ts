import { PublicKey } from "@solana/web3.js";

export const IDLCounter = {
    "version": "0.1.0",
    "name": "counter",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "counter",
            "isMut": true,
            "isSigner": false,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "type": "string",
                  "value": "counter"
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "increment",
        "accounts": [
          {
            "name": "counter",
            "isMut": true,
            "isSigner": false,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "type": "string",
                  "value": "counter"
                }
              ]
            }
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "counter",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "count",
              "type": "u64"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      }
    ]
  };

export const PROGRAM_ID_COUNTER = new PublicKey('Y24qzN7mbZuBkFdWxANXRzcB9fK9o3hVuuExAH8F29q');