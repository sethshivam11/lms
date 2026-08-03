import { Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import EarningStats from "../components/EarningStats";
import Transactions from "../components/Transactions";
import CoursesSold from "../components/CoursesSold";
import BankAccount from "../components/BankAccount";
import Payouts from "../components/Payouts";

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
        <Link
          to="/create-course"
          className="button button--primary ring-visible-offset"
        >
          <Banknote /> Withdraw
        </Link>
      </div>
      <EarningStats />
      <div className="grid md:grid-cols-2 gap-6">
        <Transactions />
        <CoursesSold />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Payouts />
        <BankAccount />
      </div>
    </div>
  );
}

export default Earnings;
