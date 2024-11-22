import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="p-6">
            {/* Main Heading */}
            <h1 className="text-3xl font-bold text-center text-pink-600 mb-10">
                My Makeup Products
            </h1>

            {/* Products Grid */}
            <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Product 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/product1.png"
                            alt="Product one"
                            width={300}
                            height={300}
                        />
                    </div>
                    <p className="text-center pt-4 text-lg font-semibold">PKR 1500</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-pink-600 text-white rounded-md">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/product2.jpg"
                            alt="Product Two"
                            width={300}
                            height={300}
                        />
                    </div>
                    <p className="text-center pt-4 text-lg font-semibold">PKR 2,000</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-pink-600 text-white rounded-md">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/product3.jpg"
                            alt="Product Three"
                            width={300}
                            height={300}
                        />
                    </div>
                    <p className="text-center pt-4 text-lg font-semibold">PKR 5,000</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-pink-600 text-white rounded-md">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
