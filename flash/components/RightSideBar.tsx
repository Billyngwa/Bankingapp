import Image from "next/image";
import Link from "next/link";
import BankCard from "./BankCard";

const RightSideBar = ({ user, banks, transactions }: RightSidebarProps) => {
  return (
    <section className="w-[auto] shadow-lg">
      <Image
        src={"/icons/gradient-mesh.svg"}
        width={400}
        height={400}
        alt="image"
      />
      <div className="user-info ml-3">
        <span className="bg-gray-100 shadow-xl h-full w-full py-3 px-6 border-white border-4 text-center text-bankGradient text-[40px] rounded-[50%] align-middle">
          {user.name[0]}
        </span>
        <div className="email-name pt-8">
          <h1 className="font-bold">{user.name}</h1>
          <h5 className="text-[15px]">{user.email}</h5>
        </div>
      </div>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My banks</h2>
          <Link href="/" className="flex gap-2">
            <Image src={"/icons/plus.svg"} width={20} height={20} alt="plus" />
            <h2>Add Bank</h2>
          </Link>
        </div>
        {/* {
          banks.length>0 && 
           (
            <div className="baks">
              {
                banks.map((bank,index) => {
                  return (
                    <div key={index} className={`relative top-9 ${index<index+1 && ""}`}>
                      bank {index+1}
                    </div>
                  )
                })
              }
            </div>
           )
          
        } */}
        {banks.length > 0 && (
          <div className="banks relative ">
            <div className="absolute top-[5px] left-[5%] z-30 bg-red-100">
              {banks[0] && (
                <BankCard
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={user.firstName + user.lastName}
                  showBalance={false}
                />
              )}
            </div>

            {banks[1] && (
              <div className="absolute top-[30px] left-[15%] z-20 bg-pink-300">
                {banks[1] && (
                  <BankCard
                    key={banks[1].$id}
                    account={banks[1]}
                    userName={user.firstName + user.lastName}
                    showBalance={false}
                  />
                )}{" "}
              </div>
            )}
             {banks[2] && (
              <div className="absolute top-[55px] left-[25%] z-10 bg-pink-300">
                {banks[2] && (
                  <BankCard
                    key={banks[2].$id}
                    account={banks[2]}
                    userName={user.firstName + user.lastName}
                    showBalance={false}
                  />
                )}{" "}
              </div>
            )}
          </div>
        )}
      </section>
    </section>
  );
};

export default RightSideBar;
