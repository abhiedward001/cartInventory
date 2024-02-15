import React from 'react'

function Switch() {
    return (
        <label class="inline-flex items-center cursor-pointer my-2 absolute right-4 top-4">
             <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mx-2">Admin</span>
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-900"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mx-2">User</span>
        </label>
    )
}

export default Switch