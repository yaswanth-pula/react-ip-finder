import ipRegex from "ip-regex";
/**
 *
 * @param input_ip is the user input for searchlookup
 * ipRegex helps us to provide the Regular expression for both ipv4 and ipv6
 */
export default function validateIP(input_ip) {
  return ipRegex({ exact: true }).test(input_ip);
}
