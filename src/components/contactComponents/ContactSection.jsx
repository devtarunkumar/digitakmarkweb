import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactSection = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSuccess(true);
        console.log(values);
        resetForm();

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="bg-white shadow-2xl md:rounded-[3rem] rounded-none grid lg:grid-cols-[40%_60%] overflow-hidden">
      {/* LEFT SIDE SAME */}
      <div className="bg-gray-900 text-white p-5 md:p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[80px] -ml-32 -mb-32" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[60px] -mr-24 -mt-24" />

        <div className="space-y-12 relative z-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Let's discuss your idea and build something great together.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="min-w-12 min-h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FaEnvelope />
              </div>
              <div className="flex flex-col gap-1">
                <span className="md:text-lg text-sm font-medium text-gray-300">
                  stratvizsolution@gmail.com
                </span>
                <span className="md:text-lg text-sm font-medium text-gray-300">
                  Sharmav50531@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="min-w-12 min-h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-xl">
                <FaPhoneAlt />
              </div>
              <div className="flex flex-col gap-1">
                <span className="md:text-lg text-sm font-medium text-gray-300">
                  +91 8307206698
                </span>
                <span className="md:text-lg text-sm font-medium text-gray-300">
                  +91 70158 01724
                </span>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="min-w-12 min-h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-xl mt-1">
                <FaMapMarkerAlt />
              </div>
              <div className="text-gray-400">
                <p className="font-bold text-white text-lg">Noida Sector 62</p>
                <p className="text-base">Block - C, Rajiv Vihar, UP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="p-2 lg:p-20 bg-white">
        <h3 className="text-3xl font-bold text-gray-900 md:mb-10 mb-2">
          Send a Message
        </h3>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                {...formik.getFieldProps("name")}
                placeholder="John Doe"
                className={`w-full bg-gray-50 border ${formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-gray-100"
                  } md:rounded-xl rounded-sm md:px-6 px-3 md:py-4 py-2 outline-none focus:border-primary focus:bg-white transition-all`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs font-bold ml-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                {...formik.getFieldProps("phone")}
                placeholder="+91 00000 00000"
                className={`w-full bg-gray-50 border ${formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "border-gray-100"
                  } md:rounded-xl rounded-sm md:px-6 px-3 md:py-4 py-2 outline-none focus:border-primary focus:bg-white transition-all`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-xs font-bold ml-1">
                  {formik.errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
              placeholder="example@email.com"
              className={`w-full bg-gray-50 border ${formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-100"
                } md:rounded-xl rounded-sm md:px-6 px-3 md:py-4 py-2 outline-none focus:border-primary focus:bg-white transition-all`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs font-bold ml-1">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              {...formik.getFieldProps("message")}
              placeholder="Tell us about your project..."
              className={`w-full bg-gray-50 border ${formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-gray-100"
                } md:rounded-xl rounded-sm md:px-6 px-3 md:py-4 py-2 outline-none focus:border-primary focus:bg-white transition-all resize-none`}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-xs font-bold ml-1">
                {formik.errors.message}
              </p>
            )}
          </div>

          {success && (
            <div className="text-green-600 text-sm font-bold bg-green-50 p-4 rounded-xl border border-green-100">
              Your message has been sent and saved!
            </div>
          )}

          <button
              type="submit"
              className={`w-full bg-linear-to-r from-primary to-accent text-white md:py-5 py-2 md:rounded-xl rounded-sm font-bold text-lg shadow-orange hover:shadow-green-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Please wait..." : "Submit Message"}
            </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
