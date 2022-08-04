## ICED Website: https://iced-eval.org/ 
### The Website is built on the NextJS Framework of React.

#### Changes on Local
1.	Clone the Repository to your local system.    
2.	Please make sure **Node JS** is installed on your system.     
3. Open the project in any code editor of your choice.     
4.	Run the command *npm install* to install all dependencies of the Project     
5.	Run *npm run dev* to start a development server    
6.	The development server will run on **http://localhost:3000**    
7.	Make necessary changes and test on local.    
8.	After done, run *npm run build* to test for any error during the build process.    
9.	If no, push the changes to git     


#### Deployment Part    
1.	The hosting is on **GoDaddy VPS Server**      
2. Login to the server using **Putty** Software.         
3. Provide the IP address and connect.               
4. Enter the username and password as prompted. *(password might not be visible)*         
5. In the terminal run command *sudo su*            
6. Navigate two folders back using *cd ..*                   
7. Navigate to *cd/var/www/html*             
8. Run command *git pull*        
9. Provide your Git username and password *(If the password does not work use the authentication token of your git account)*           
10. Now open a duplicate terminal – 2 on Putty and run command *pm2 stop Live_Site*               
11. Now go to the first terminal and run the command *npm run build*            
12.	After successful build run command *npm start*              
13.	Now got to Terminal 2 and run command *pm2 start Live_Site*               
14. You may now close both the terminal and the site will be live with the done changes.                   

#### Updating Newsletter 
1.	Navigate to the Excel File Link: [Click Here](https://docs.google.com/spreadsheets/d/10l-_2o9SBBHXqSXESzAOc9z09HoHvG2YLVLvFsNMe5U/edit?usp=sharing)              
2.	Enter the details of the Newsletter to be uploaded. Make sure the date matches the format YYYY-MM-DD.            
3.	Paste the PDF and Video File Links in the mentioned columns.            
4.	The website will automatically reflect the updated newsletters              
