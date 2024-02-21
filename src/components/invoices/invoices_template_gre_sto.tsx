

export const InvoiceTemplate = () => {
  return (
    <>
     <div className="container mx-auto p-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
           
            <div className="p-6">
                <h1 className="text-xl font-bold">Invoice</h1>
                <p className="text-gray-600">Invoice #12345</p>
            </div>
            
            
            <div className="border-t border-gray-200">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Quantity</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      
                        <tr>
                            <td className="px-4 py-2">Product A</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">$20.00</td>
                            <td className="px-4 py-2">$40.00</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
            
           
            <div className="p-6">
                <div className="flex justify-between border-t border-gray-200">
                    <span className="font-semibold">Total</span>
                    <span>$40.00</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

