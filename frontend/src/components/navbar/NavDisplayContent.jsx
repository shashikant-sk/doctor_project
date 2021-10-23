export const Doctors = [
    {
        title: "Doctors",
        navItems: [
            { link: "/doctordashboard", dropItem: "Doctor Dashboard" , sideData: []},
            { link: "/appointments", dropItem: "Appointments" , sideData: []},
            { link: "/scheduletiming", dropItem: "Schedule Timing" , sideData: []},
            { link: "/patientslist", dropItem: "Patients List" , sideData: []},
            { link: "/patientsprofile", dropItem: "Patients Profile" , sideData: []},
            { link: "/chat", dropItem: "Chat" , sideData: []},
            { link: "/invoices", dropItem: "Invoices" , sideData: []},
            { link: "/profilesettings", dropItem: "Profile Settings" , sideData: []},
            { link: "/reviews", dropItem: "Reviews" , sideData: []},
            { link: "/doctorregister", dropItem: "Doctor Register" , sideData: []},
            {link: "", dropItem: "Blog",sideData: [{ link: "/blog", dropItem: "Blog" }, { link: "/blogview", dropItem: "Blog View" }, { link: "/addblog", dropItem: "Add Blog" }]}
        ]
    }
];

export const Patients = [
    {
        title: "Patients",
        navItems: [
            {link: "", dropItem: "Doctors",sideData: [{ link: "/mapgrid", dropItem: "Map Grid" }, { link: "/maplist", dropItem: "Map List" }]},
            { link: "/searchdoctor", dropItem: "Search Doctor" , sideData: []},
            { link: "/doctorprofile", dropItem: "Doctor Profile" , sideData: []},
            { link: "/booking", dropItem: "Booking" , sideData: []},
            { link: "/checkout", dropItem: "Checkout" , sideData: []},
            { link: "/bookingsuccess", dropItem: "Booking Success" , sideData: []},
            { link: "/patientdashboard", dropItem: "Patient Dashboard" , sideData: []},
            { link: "/favourites", dropItem: "Favourites" , sideData: []},
            { link: "/chat", dropItem: "Chat" , sideData: []},
            { link: "/profilesettings", dropItem: "Profile Settings" , sideData: []},
            { link: "/changepassword", dropItem: "Change Password" , sideData: []},
        ]
    }
];

export const Pharmacy = [
    {
        title: "Pharmacy",
        navItems: [
            { link: "/pharmacy", dropItem: "Pharmacy" , sideData: []},
            { link: "/pharmacydetails", dropItem: "Pharmacy Details" , sideData: []},
            { link: "/pharmacysearch", dropItem: "Pharmacy Search" , sideData: []},
            { link: "/product", dropItem: "Product" , sideData: []},
            { link: "/productdescription", dropItem: "Product Description" , sideData: []},
            { link: "/cart", dropItem: "Cart" , sideData: []},
            { link: "/productcheckout", dropItem: "Product Checkout" , sideData: []},
            { link: "/paymentsuccess", dropItem: "Payment Success" , sideData: []},
            { link: "/pharmacyregister", dropItem: "Pharmacy Register" , sideData: []},
        ]
    }
];

export const Pages = [
    {
        title: "Pages",
        navItems: [
            { link: "/voicecall", dropItem: "Voice Call" , sideData: []},
            { link: "/videocall", dropItem: "Video Call" , sideData: []},
            { link: "/searchdoctors", dropItem: "Search Doctors" , sideData: []},
            { link: "/calendar", dropItem: "Calendar" , sideData: []},
            { link: "/components", dropItem: "Components" , sideData: []},
            {link: "", dropItem: "Invoices",sideData: [{ link: "/invoices", dropItem: "Invoices" }, { link: "/invoiceview", dropItem: "Invoice View" }]},
            { link: "/starterpage", dropItem: "Starter Page" , sideData: []},
            { link: "/login", dropItem: "Login" , sideData: []},
            { link: "/register", dropItem: "Register" , sideData: []},
            { link: "/forgotpassword", dropItem: "Forgot Password" , sideData: []}
        ]
    }
];

export const Blog = [
    {
        title: "Blog",
        navItems: [
            { link: "/bloglist", dropItem: "Blog List" , sideData: []},
            { link: "/bloggrid", dropItem: "Blog Grid" , sideData: []},
            { link: "/blogdetails", dropItem: "Blog Details" , sideData: []}
        ]
    }
];

export const Admin = [
    {
        title: "Admin",
        navItems: [
            { link: "/admin", dropItem: "Admin" , sideData: []},
            { link: "/pharmacyadmin", dropItem: "Pharmacy Admin" , sideData: []}
        ]
    }
];

export default {Doctors,Patients,Pharmacy,Pages,Blog,Admin};