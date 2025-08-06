/**
 * Hash function output size, in bytes
 */
declare const SHA512_HASH_BYTES: isize;
declare class Sha512 {
	r: u64;
	t: u64;
	st: Uint8Array;
	/**
	 * Initialize a multipart hash computation
	 * @returns A hash function state
	 */
	constructor();
	/**
	* Absorb data to be hashed
	* @param m (partial) message
	*/
	update(m: Uint8Array): void;
	/**
	* Finalize a hash computation
	* @returns Hash
	*/
	final(): Uint8Array;
	/**
	* Compute a hash for a single-part message
	* @param m Message
	* @returns Hash
	*/
	static hash(m: Uint8Array): Uint8Array;
	/**
	* HMAC-SHA-512
	* @param m Message
	* @param k Key
	* @returns `HMAC-SHA-512(m, k)`
	*/
	static hmac(m: Uint8Array, k: Uint8Array): Uint8Array;
}
