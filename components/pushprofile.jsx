"use client";
import { UserProfile } from "@pushprotocol/uiweb";
export default function PushProfile() {
  //const pushchatID = process.env.pushchatid; // || "0x283A6f1D0974e10c20047480dA08FB2874911504";
  return (
    <UserProfile
      updateUserProfileModalBackground="TRANSPARENT"
      className="text-xs"
    />
  );
}
