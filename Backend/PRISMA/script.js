import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors"; 

const prisma = new PrismaClient();
const app = express();

app.use(cors()); 
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Server is running...");
});


app.get("/productdata", async (req, res) => {
    try {
        const products = await prisma.productdata.findMany({
            select: {
                model: true,
                image: true,
                price: true,
                processor: true,
                ram: true,
                vga: true,
                ssd: true,
                display: true,
                isinstock: true,
                count: true
            }
        });
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Error fetching products" });
    }
});


app.get("/productdata/:id", async (req, res) => {
    try {
        
        const productId = parseInt(req.params.id);

       
        const product = await prisma.productdata.findUnique({
            where: {
                id: productId, 
            },
            select: {
                model: true,
                image: true,
                price: true,
                processor: true,
                ram: true,
                vga: true,
                ssd: true,
                display: true,
                isinstock: true,
                count: true
            }
        });

        if (product) {
            res.json(product);
        } else {
          
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Error fetching product" });
    }
});


app.post("/productdata", async (req, res) => {
    try {
        const product = await prisma.productdata.create({ data: req.body });
        res.json(product);
    } catch (e) {
        res.status(500).json({ error: "Error creating product" });
    }
});

app.put("/productdata/:id", async (req, res) => {
    const { id } = req.params;
    const {
        model, image, price, processor, ram, vga, ssd, display, isinstock, count
    } = req.body;

    try {
        const updatedProduct = await prisma.productdata.update({
            where: { id: parseInt(id) },
            data: {
                model,
                image,
                price,
                processor,
                ram,
                vga,
                ssd,
                display,
                isinstock,
                count
            }
        });

        res.json(updatedProduct);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Error updating product" });
    }
});


app.delete("/productdata/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.productdata.delete({ where: { id: parseInt(id) } });
        res.json({ message: "Product deleted" });
    } catch (e) {
        res.status(404).json({ error: "Product not found" });
    }
});


app.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        user ? res.json(user) : res.status(404).json({ error: "User not found" });
    } catch (e) {
        res.status(500).json({ error: "Error fetching user" });
    }
});


app.post("/user", async (req, res) => {
    try {
        const { email, password } = req.body;

 
        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists." });
        }

 
        const user = await prisma.user.create({
            data: {
                email: email,
                password: password, 
            },
        });

        res.json(user);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Error creating user" });
    }
});


app.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.update({ where: { id: parseInt(id) }, data: req.body });
        res.json(user);
    } catch (e) {
        res.status(404).json({ error: "User not found" });
    }
});


app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.user.delete({ where: { id: parseInt(id) } });
        res.json({ message: "User deleted" });
    } catch (e) {
        res.status(404).json({ error: "User not found" });
    }
});


app.get("/comments", async (req, res) => {
    try {
        const comments = await prisma.comment.findMany();
        res.json(comments);
    } catch (e) {
        res.status(500).json({ error: "Error fetching comments" });
    }
});

app.post("/comments", async (req, res) => {
    try {
        const comment = await prisma.comment.create({ data: req.body });
        res.json(comment);
    } catch (e) {
        res.status(500).json({ error: "Error creating comment" });
    }
});


app.get("/contacts", async (req, res) => {
    try {
        const contacts = await prisma.contact.findMany();
        res.json(contacts);
    } catch (e) {
        res.status(500).json({ error: "Error fetching contacts" });
    }
});

app.post("/contacts", async (req, res) => {
    try {
        const contact = await prisma.contact.create({ data: req.body });
        res.json(contact);
    } catch (e) {
        res.status(500).json({ error: "Error creating contact" });
    }
});


app.get("/extendusers", async (req, res) => {
    try {
        const extendUsers = await prisma.extenduser.findMany();
        res.json(extendUsers);
    } catch (e) {
        res.status(500).json({ error: "Error fetching extended users" });
    }
});

app.post("/extendusers", async (req, res) => {
    try {
        const extendUser = await prisma.extenduser.create({ data: req.body });
        res.json(extendUser);
    } catch (e) {
        res.status(500).json({ error: "Error creating extended user" });
    }
});


app.get("/cartlist", async (req, res) => {
    try {
        const cartList = await prisma.cartlist.findMany();
        res.json(cartList);
    } catch (e) {
        res.status(500).json({ error: "Error fetching cart list" });
    }
});

app.post("/cartlist", async (req, res) => {
    try {
        const cartItem = await prisma.cartlist.create({ data: req.body });
        res.json(cartItem);
    } catch (e) {
        res.status(500).json({ error: "Error adding to cart list" });
    }
});


app.get("/cartlistitem", async (req, res) => {
    try {
        const cartItems = await prisma.cartlistitem.findMany();
        res.json(cartItems);
    } catch (e) {
        res.status(500).json({ error: "Error fetching cart items" });
    }
});

app.post("/cartlistitem", async (req, res) => {
    try {
        const cartItem = await prisma.cartlistitem.create({ data: req.body });
        res.json(cartItem);
    } catch (e) {
        res.status(500).json({ error: "Error adding cart item" });
    }
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});



app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

   
        const user = await prisma.user.findUnique({
            where: { email: email },
        });

        if (!user) {
            return res.status(400).json({ error: "Incorrect username or password" });
        }

        
        const passwordMatch = user.password === password;

        if (passwordMatch) {
           
            const { password, ...userData } = user;
            res.json(userData); 
        } else {
            return res.status(400).json({ error: "Incorrect username or password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during login" });
    }
});


app.put("/updatepassword", async (req, res) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({ error: "Email and new password are required" });
    }

    try {
     
        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        });

        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

     
        const user = await prisma.user.update({
            where: { email: email },
            data: { password: newPassword }
        });

        res.json({ message: "Password updated successfully" });
    } catch (e) {
        console.error("Error updating password:", e);
        res.status(500).json({ error: "Error updating password" });
    }
});
