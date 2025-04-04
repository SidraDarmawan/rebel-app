import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { HomeIcon, ReceiptText, Ticket } from "lucide-react";

const LeftSection = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col">
        <Button
          variant="ghost"
          className="justify-normal"
          onClick={() => router.push("/organizer")}
        >
          <HomeIcon className="mr-4 h-4 w-4" /> Home
        </Button>
        <Button
          variant="ghost"
          className="justify-normal"
          onClick={() => router.push("/organizer/transaction")}
        >
          <ReceiptText className="mr-4 h-4 w-4" />
          Transaction
        </Button>
        <Button
          variant="ghost"
          className="justify-normal"
          onClick={() => router.push("/organizer/events")}
        >
          <Ticket className="mr-4 h-4 w-4" /> Your Event
        </Button>
      </div>
    </div>
  );
};

export default LeftSection;
