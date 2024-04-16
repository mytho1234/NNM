import mongoose from "mongoose";
const OrderSchema = mongoose.Schema(
    {  
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            required: true,
        },  
        orderItems:[
            {
                size:{type: String, required: true},
                color:{type: String, required: true},
                name:{type: String, required: true},
                qty:{type: String, required: true},
                image:{type: String, required: true},
                price:{type: String, required: true},
                product:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Products',
                    //required: true,                 
                }
            }
        ],
        shippingAddress:{
            fullName: {type: String},
            address: {type: String},
            email:{
                type: String,
                trim: true,
                lowercase: true,
            },
            location:{type: String},
            PhoneNumber:{type: String},
            ShippingMethood:{type: String},
            ShippingCost:{type: Number},
        },
        payments:{
            paymentMethod:{type: String},
            status:{type: String,default:'pending', required:true},
            paymentDatr:{type: Date},
        },
        delivery: {
            status:{type: String,default:'awating',required:true},
            deliveryDate:{type: Date},
            deliveryMethon:{type: String},
        },
        totalPrice:{ type: Number, required:true},
        subTotalPrice:{type: Number, required:true},
        taxprice:{type: Number, required:true, default: 0.0},
    },
    {
        timestamps: true,
    }
);
export default mongoose.model('Order', OrderSchema);