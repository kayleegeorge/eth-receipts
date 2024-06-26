import { Address, PublicClient } from 'viem';
import { Account, AccountTypeStr, AddressProfile } from '@/app/utils/types';
import { getProfileFunctions } from '@/app/utils/profiles/profileFunctions';

/** Get account type given an address */
async function getAccountType(address: Address, chainId: number): Promise<Account> {
  // Fetch profile on each supported account type.
  const profileFunctions = getProfileFunctions(chainId);
  const accountResults = await Promise.all(profileFunctions.map((fn) => fn(address)));
  return accountResults.find((account) => account !== null) || { type: AccountTypeStr.UNKNOWN };
}

/** Resolve account profile given an address */
export async function resolveAccountForAddress(
  address: Address,
  chainId: number,
): Promise<AddressProfile> {
  const account: Account = await getAccountType(address, chainId);
  return { accountAddress: address, account: account };
}
