
function RevenueByCourse() {
  const revenue = [
    {
      cover:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1780987669/lms/course/yndzt0xxjwmgkyrucwqy.jpg",
      course: "React Tutorial",
      value: 23,
    },
    {
      cover:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1780988065/lms/course/fegjy1rmynrizittty3p.jpg",
      course: "Styling with CSS",
      value: 75,
    },
    {
      cover:
        "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1780988197/lms/course/hcghp49jrk9favwtukme.jpg",
      course: "React Tutorial",
      value: 2,
    },
  ];

  return (
    <div className="bg-background p-4 rounded-lg w-full">
      <h4 className="text-xl font-semibold tracking-tight">
        Revenue by Courses
      </h4>
      <div className="grid md:grid-cols-2 gap-2 mt-4">
        {revenue.map((item, index) => (
          <div className="flex items-center gap-4 border rounded-lg p-1" key={index}>
            <img src={item.cover} className="aspect-video w-20 rounded-lg" />
            <div className="flex flex-col gap-1 w-full pr-2">
              <div className="flex items-center justify-between gap-4">
                <h6 className="font-medium tracking-tight">{item.course}</h6>
                <span className="text-muted text-sm">{item.value}%</span>
              </div>
              <div className="relative w-full h-2 bg-background-tertiary rounded-full">
                <div
                  className="bg-accent h-2 rounded-full"
                  style={{
                    width: `${item.value}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevenueByCourse;
