/// Removes all null bytes from a string.
pub fn clean(value: String) -> String {
    value.replace('\0', "")
}
