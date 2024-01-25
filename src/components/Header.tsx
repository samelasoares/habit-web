import { List, Plus } from "phosphor-react";

import logoImage from "../assets/logo.svg";
import { Modal } from "./Modal";
import { NewHabitForm } from "./NewHabitForm";
import { HabitsListed } from "./HabitsListed";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />
      <div className="flex flex-row gap-2">
        <Modal
          componentTitle="Criar hábito"
          componentReender={<NewHabitForm />}
          buttonIcon={<Plus size={20} className="text-violet-500" />}
          buttonTitle=" Novo hábito"
          buttonStyle="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background"
        />
        <Modal
          componentTitle="Hábitos criados"
          componentReender={<HabitsListed />}
          buttonIcon={<List size={20} className="text-violet-500" />}
          buttonTitle=""
          buttonStyle="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background"
        />
      </div>
    </div>
  );
}
