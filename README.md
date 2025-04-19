 # Tomato
  * "Tomato" is a full-stack web application designed for online food ordering, leveraging the MERN stack to provide a seamless and intuitive user experience. The platform includes comprehensive features for both users and administrators, ensuring efficient food ordering and management processes.
 # Website Preview
 ![web-1](https://github.com/user-attachments/assets/2a29faad-7d24-41a9-bfe3-c5f73ad44e56)
 ![web-2](https://github.com/user-attachments/assets/1a0e4c0d-a990-4200-9f5d-8d965830fcf5)
 ![web-3](https://github.com/user-attachments/assets/5a422f62-eb93-4199-8f9a-d398d3de29a0)
 ![web-4](https://github.com/user-attachments/assets/f8fd61d5-76e4-4f6d-a231-ab76c6aa53ca)
 ![web-5](https://github.com/user-attachments/assets/491526d8-0097-4476-91e7-d9ee88dbcff7)
## Features of the Project
 * User Interface
   * Users can browse available food items, view details, and add items to their cart.
   * The interface features a sliding mechanism for effortless browsing of food categories.
   * Additional items can be accessed by navigating through the shop section.
   * Users must log in to access the website, and new users can sign up for an account.
   * The interface incorporates user authentication, including Google Sign-In via Firebase.
 * Admin Interface
   * Access to the admin dashboard requires users to log in with existing credentials or sign up for an account.
   * Within the admin dashboard, users can manage food items by editing their details.
   * Each food item includes essential information such as the item name, description, price, and image URL.
   * Admins can edit these details for existing food items.
   * Additionally, admins can upload new food items or delete existing ones.
   * Logout functionality is conveniently available within the dashboard interface.
 ## Tech Stack
   * MongoDB serves as the database management system, storing various data related to food items available on the platform, such as names, descriptions, prices, and image URLs. MongoDB's flexibility allows for storing this data without a fixed schema, accommodating the diverse nature of food item information.
React:

   * React is utilized for building the frontend of the food ordering website. It enables the creation of interactive user interfaces, allowing users to seamlessly browse through available food items, view item details, and interact with the platform's features. React's component-based architecture facilitates the development of reusable UI components, ensuring consistency and efficiency across the website.
Node.js:

  * Node.js powers the backend of the project, handling server-side logic and communication with the database. It enables the implementation of features such as user authentication, food item management, and API endpoints for frontend-backend interaction. Node.js's event-driven, non-blocking I/O model ensures the efficient handling of concurrent operations, making the website responsive and scalable.
Express:

  * Express complements Node.js by providing a minimalist web framework for building server-side applications and APIs. In this project, Express is used to define routes, middleware, and other backend functionalities. It simplifies the process of handling HTTP requests, processing data, and generating responses. Express's lightweight nature and extensive middleware ecosystem streamline backend development, accelerating the creation of a robust backend infrastructure for the food ordering platform.
