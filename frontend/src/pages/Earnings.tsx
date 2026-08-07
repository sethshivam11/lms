import EarningStats from "../components/EarningStats";
import Transactions from "../components/Transactions";
import BankAccount from "../components/BankAccount";
import Payouts from "../components/Payouts";
import RequestPayout from "../components/RequestPayout";

function Earnings() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex justify-between items-center gap-4">
        <div>
          <h3 className="font-cal-sans tracking-tight sm:text-3xl text-2xl">
            Earnings
          </h3>
          <p className="text-muted">Manage your earnings and track payouts</p>
        </div>
      </div>
      <EarningStats />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-6 col-span-2">
          <Transactions />
          <Payouts />
        </div>
        <div className="flex flex-col gap-6">
          <RequestPayout />
          <BankAccount />
        </div>
      </div>
    </div>
  );
}

export default Earnings;
