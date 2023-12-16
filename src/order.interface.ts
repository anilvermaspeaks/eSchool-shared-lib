export interface ICourse {
    [key: string]: string | number | boolean | undefined;
    courseTitle: string;
    price: number;
    description: string;
  }

  
  export interface ICourseMessage {
    buyerId?: string;
    purchasedCourses?: string;
    template?: string;
    amount?: string;
    buyerUsername?: string;
    title?: string;
    description?: string;
    orderId?: string;
    invoiceId?: string;
    orderUrl?: string;
    newDate?: string;
    subject?: string;
    header?: string;
    total?: string;
    message?: string;
  }
  
  export interface IOrderDocument {
    offer: ICourse;
    courseId: string;
    courseCoverImage: string;
    courseTitle: string;
    courseDescription: string;
    buyerId: string;
    buyerUsername: string;
    buyerEmail: string;
    buyerImage: string;
    orderId: string;
    invoiceId: string;
    quantity: number;
    price: number;
    paymentIntent?: string;
  }
  
  export interface IOrderNotifcation {
    _id?: string;
    userTo: string;
    receiverUsername: string;
    receiverPicture: string;
    orderId: string;
    type?: string;
    createdAt: Date;
  }