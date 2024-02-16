Build a simple inventory management web app where you can check list of all product and can manage the product available in the inventory like editing the price and quantity deleting the product and disabling the product.
This app will have two view admin and user which can be switch from navigation bar using switch button

(Admin)
admin can edit, delete, disable the product

(User)
user can only view the product actions buttons (icons) will be disable


API: https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory
Method: GET
calculate total product , total store value, out of stock and no of category and display it in top 4 widget
List all the product in a table along with action icons Admin view
upon clicking on the delete icon delete the entire row
clicking on edit icon should open the popup where you can edit fields as show in the above screenshoot, update value should be reflected in the table (handle the updated values locally there is not api for update), top 4 widget values should be updated automatically.
clicking on eye icon should disable the entire row and edit button should be disabled,
upon disabled/ deletion of product top 4 widget “total product , total store value, out of stock and no of category” values should decrement accordingly.
User view
disable all actions buttons for user



Technology Used:-  React.JS, Redux, Javascript, Tailwind CSS, Parcel, Html, CSS, Firebase