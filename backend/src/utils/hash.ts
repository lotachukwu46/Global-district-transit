export function sha256(str: string) {
  // quick browser SHA256 using SubtleCrypto
  const buffer = new TextEncoder().encode(str);
  return crypto.subtle.digest("SHA-256", buffer).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  });
}
