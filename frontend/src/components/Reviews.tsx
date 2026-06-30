import { Avatar, Button } from "@heroui/react";
import useBoundStore from "../store";
import { formatDistance } from "date-fns";
import RatingStars from "./RatingStars";

function Reviews() {
  const { reviews } = useBoundStore();
  return (
    <div className="bg-background rounded-lg p-4 h-fit">
      <h4 className="text-xl font-semibold tracking-tight">
        Ratings & Reviews
      </h4>
      <div className="flex flex-col gap-4">
        {reviews.slice(0, 2).map((item, index) => (
          <div className="flex flex-col gap-3 first:border-b p-4" key={index}>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="rounded-full size-7">
                  <Avatar.Image src={item.user_avatar} />
                  <Avatar.Fallback>{item.user_name}</Avatar.Fallback>
                </Avatar>
                <div>
                  <span className="font-semibold">{item.user_name}</span>
                  <div className="flex text-warning gap-1">
                    <RatingStars
                      stars={item.rating}
                      size={12}
                      subTextClassName="hidden"
                    />
                  </div>
                </div>
              </div>
              <span className="font-inter-tight text-xs tracking-tight text-muted">
                {formatDistance(new Date(item.created_at), new Date(), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <span className="text-sm">{item.review}</span>
          </div>
        ))}
        <div className="pl-3">
          <Button className="w-full" variant="ghost">
            Show all reviews
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
