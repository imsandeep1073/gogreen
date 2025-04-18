import Image from 'next/image';

const StoresSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-[#00A651] text-5xl md:text-6xl font-bold mb-4">
            For Stores
          </h2>
          <div className="bg-[#00A651] text-white py-4 px-8 rounded-full inline-block">
            <h3 className="text-xl md:text-2xl font-semibold">
              Expand Your Reach. Grow Your Business
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-12 max-w-3xl">
          From delicious meals to daily essentials, Go Green gives you the power to get what
          you need — exactly when you need it. With a few taps, you can browse nearby
          stores and restaurants, place your order, and track it live, all from one seamless
          app.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/instentOrderPage_img.png"
              alt="Instant Order Notifications"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl font-semibold">
                Instant Order Notifications
              </h4>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/dynamic-data-visualization-3d.png"
              alt="Easy Inventory & Menu Management"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl font-semibold">
                Easy Inventory & Menu Management
              </h4>
            </div>
          </div>

          {/* Feature 3 - Right Side Image */}
          <div className="relative h-64 md:row-span-2 lg:row-span-1 rounded-lg overflow-hidden">
            <Image
              src="/full-shot-woman-shopping-market.png"
              alt="Store Worker"
              fill
              className="object-cover"
            />
          </div>

          {/* Feature 4 */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/happy-senior-man-using-touchpad-signing-delivery-from-courier.png"
              alt="Direct Communication with Delivery Partners"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl font-semibold">
                Direct Communication with Delivery Partners
              </h4>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/two-business-men-celebrating-deal.png"
              alt="Direct Communication with Delivery Partners"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white text-xl font-semibold">
                Direct Communication with Delivery Partners
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoresSection; 