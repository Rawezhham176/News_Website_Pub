import { useRef, useEffect } from "react";
import { loadScript } from "@paypal/paypal-js";

export default function PayP({ value, msg }) {
  const paypal = useRef();

  useEffect(() => {
    /* eslint-enable */

    const InitializePaypal = async () => {
      const paymentInit = await loadScript({
        "client-id": "Your ID",
        currency: "EUR",
      });

      paymentInit
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: msg,
                  amount: {
                    currency_code: "EUR",
                    value: value,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
          },
          onError: (err) => {
            console.log(err);
            alert("We encountered an error on the payment part");
          },
        })
        .render(paypal.current);
    };
    InitializePaypal();
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
