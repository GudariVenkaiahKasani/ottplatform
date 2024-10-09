import mockData from "../utilities/data/data1";
import SubscriptionCard from "./SubscriptionCard";
const Subscriptionplans = () => {
  return (
    <div>
      <div className="flex flex-row justify-around bg-blue-950">
        {mockData.subscriptions.map((result, index) => (
          <SubscriptionCard
            key={index}
            name={result.name}
            price={result.price}
            screens={result.screens}
            quality={result.quality}
          />
        ))}
      </div>
    </div>
  );
};
export default Subscriptionplans;
