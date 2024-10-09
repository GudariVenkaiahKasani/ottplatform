const SubscriptionCard = ({ name, price, screens, quality }) => {
  return (
    <div className="flex  py-10">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-sm w-full ">
        <h2 className="text-2xl font-bold text-center mb-4">
          Netflix Subscription
        </h2>
        <p className="text-center mb-4">
          Get access to unlimited movies and TV shows with our premium
          subscription.
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg">{name}</span>
            <span className="font-bold text-xl">{price}</span>
            <span>No Of Screens-{screens}</span>
            <span>Quality-{quality}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionCard;
