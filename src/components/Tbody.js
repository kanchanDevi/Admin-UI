import React from 'react'

const Tbody = ({id,name, email, role, action}) => {
  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    
                    <div> <tbody className="divide-y divide-gray-200">
    <tr>
        <td className="py-3 pl-4">
            <div className="flex items-center h-5">
                <input
                    type="checkbox"
                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                />
                <label
                    htmlFor="checkbox"
                    className="sr-only"
                >
                    Checkbox
                </label>
            </div>
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
            {id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {name}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
{email}                            </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <a
                className="text-green-500 hover:text-green-700"
                href="#"
            >
                Edit
            </a>
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <a
                className="text-red-500 hover:text-red-700"
                href="#"
            >
                Delete
            </a>
        </td>
    </tr>
   
</tbody>
</div>
                </table>
            </div>
        </div>
    </div>
</div>
   
  )
}

export default Tbody