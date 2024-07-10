import Link from "next/link";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-white text-16 font-semibold">
              {account.name || userName}
            </h1>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-white font-semibold text-12">{userName}</h1>
              <h1 className="text-white font-semibold text-12">** / **</h1>

            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
                **** **** ****
            </p>
          </article>
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
