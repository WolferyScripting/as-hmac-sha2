/**
 * (best-effort) Constant-time hexadecimal encoding
 * @param bin Binary data
 * @returns Hex-encoded representation
 */
declare function bin2hex(bin: Uint8Array): string;
/**
* (best-effort) Constant-time hexadecimal decoding
* @param hex Hex-encoded data
* @returns Raw binary representation
*/
declare function hex2bin(hex: string): Uint8Array | null;
/**
* (best-effort) Constant-time verification that x == y
* @param x array 1
* @param y array 2
* @returns true if both arrays contain the same data
*/
declare function verify(x: Uint8Array, y: Uint8Array): bool;
