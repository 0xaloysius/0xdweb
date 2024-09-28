"use client";
import { ChatWidget } from "@pushprotocol/uiweb";
export default function PushWidgte() {
  const pushchatid =
    //process.env.pushchatid ||
    "0x283A6f1D0974e10c20047480dA08FB2874911504";

  return (
    <ChatWidget
      chatId={pushchatid}
      modalTitle="Powered By Push Protocol"
      welcomeComponent="WEB3 Messaging"
    />
  );
}
