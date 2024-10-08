/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  MoveDownRight,
  RotateCw,
  Clipboard,
  Copy,
  MoveUpLeft,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { CouponModal } from "@/components/modal/CouponModal";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import "./Discount.css";
import {
  useGetAllCouponsQuery,
  useUpsertCopyCouponMutation,
} from "@/redux/features/coupon/couponApi";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";


type Coupon = {
  title: string;
  discount: number;
  coupon: string;
};

export default function Discount() {
  const currentUser = useAppSelector(selectCurrentUser);
  const role = currentUser ? currentUser.role : null;

  const [copyCoupon] = useUpsertCopyCouponMutation();

  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: couponsData } = useGetAllCouponsQuery(undefined);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const newRotation = rotation + 360 * 5 + Math.floor(Math.random() * 360);
    setRotation(newRotation);

    const selectedIndex = Math.floor(
      (newRotation % 360) / (360 / couponsData?.data.length)
    );
    setTimeout(() => {
      setSelectedCoupon(
        couponsData.data[couponsData?.data.length - 1 - selectedIndex]
      );
      setIsSpinning(false);
      setIsModalOpen(true);
    }, 5000);
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);

      if (role === "user") {
        try {
          const res = await copyCoupon({ coupon: code }).unwrap();

          if (res.success) {
            toast({
              variant: "default",
              title: res.message,
            });
          }
        } catch (error: any) {
          toast({
            variant: "destructive",
            title: error?.data?.message,
          });
        }
      } else {
        toast({
          title: "Coupon code copied!",
          description: `${code} has been copied to your clipboard.`,
        });
      }

      setIsModalOpen(false);
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Failed to copy coupon code.",
        description: "An error occurred while copying the coupon code.",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-gray-900 p-4">
       <h4 className="text-base uppercase lg:text-2xl font-bold mb-8 lg:mb-20 text-[#F43650]">Every Bike is on offers And Discount!</h4>
          <div className="flex items-center gap-20 lg:flex-row flex-col">
             
             <div>
             <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center md:text-left"
            >
              <h2 className="lg:text-2xl text-base font-semibold tracking-tighter ">
              Spin the wheel to win your discount!
              </h2>
              <p className="mt-4 text-muted-foreground sm:text-xl">
              Use the coupon code you received by spinning.
              </p>
              <Button
                onClick={handleSpin}
                className="mt-6 bg-gradient-to-r from-rose-500 to-rose-500 hover:from-rose-600 hover:to-rose-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
                disabled={isSpinning}
              >
                {isSpinning ? (
                  <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <MoveDownRight className="mr-2 h-4 w-4" />
                )}
                {isSpinning ? "Spinning..." : "Spin the Wheel"}
              </Button>
            </motion.div>
             </div>
           


              <div>

              <div className="wheel-container relative">
              <div
                className="wheel"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {couponsData?.data.map((coupon: Coupon, index: number) => (
                  <div
                    key={index}
                    className="wheel-segment"
                    style={{
                      transform: `rotate(${
                        index * (360 / couponsData?.data.length)
                      }deg)`,
                      background: index % 2 === 0 ? "" : "",
                    }}
                  >
                    <div className="wheel-text text-3xl">
                      {coupon.discount > 0
                        ? `${coupon.discount}% OFF`
                        : "No Luck"}
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={handleSpin}
                disabled={isSpinning}
              >
                <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                  <MoveUpLeft className="w-6 h-6 text-primary" />
                </span>
              </button>
            </div>
              </div>
          </div>
     
  

























      
      {selectedCoupon && (
        <CouponModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Copy className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {selectedCoupon.discount > 0
                        ? `Discount: ${selectedCoupon.discount}%`
                        : "No Discount"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedCoupon.title}
                    </p>
                  </div>
                </div>
                {selectedCoupon.discount > 0 ? (
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard(selectedCoupon.coupon)}
                  >
                    <Clipboard className="mr-2 h-4 w-4" />
                    {selectedCoupon.coupon}
                  </Button>
                ) : (
                  <p className="mt-2 text-red-500">
                    Sorry, no coupon this time! Try again.
                  </p>
                )}
              </div>
            </CardContent>
            {selectedCoupon.discount > 0 && (
              <CardFooter className="bg-muted px-6 py-4">
                <p className="text-sm text-muted-foreground">
                  Use the code above to get your discount!
                </p>
              </CardFooter>
            )}
          </Card>
        </CouponModal>
      )}
    </div>
  );
}
