import { Avatar } from "@heroui/react";
import useBoundStore from "../store";
import RatingStars from "./RatingStars";
import { formatDistance } from "date-fns";

function RecentReviews() {
  const { reviews } = useBoundStore();

  return (
    <div className="bg-background p-4 rounded-lg">
      <h4 className="text-xl font-semibold tracking-tight">Recent Reviews</h4>
      <div className="flex flex-col gap-2 mt-4">
        {reviews
          .slice(0, 3)
          .filter((item) => item.review?.length > 0)
          .map((item, index) => (
            <div
              className="flex gap-4 border rounded-lg p-2 w-full"
              key={index}
            >
              <Avatar className="rounded-full size-10">
                <Avatar.Image src={item.user_avatar} />
                <Avatar.Fallback>{item.user_name[0]}</Avatar.Fallback>
              </Avatar>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h6 className="font-medium tracking-tight">
                      {item.user_name}
                    </h6>
                    <RatingStars
                      stars={item.rating}
                      subTextClassName="hidden"
                    />
                  </div>
                  <span className="text-muted text-xs">
                    {formatDistance(new Date(item.created_at), new Date(), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <p className="">{item.review}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecentReviews;
