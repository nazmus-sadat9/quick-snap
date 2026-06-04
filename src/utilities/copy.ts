export async function copy(text: any): Promise<boolean>{

  if (!navigator?.clipboard?.writeText) {
    console.warn("copy failed: clipboard API is not supported the browser.");
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;

  } catch (error) {
    console.error("copy failed: ", error);
    return false;
  }
}
