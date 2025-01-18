import Header from '@/components/Header'
import '@/styles/globals.css'
import vazirFont from 'constants/localFont'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  // title: 'بلاگ اپ',
  title: {
    template: '%s | بلاگ اپ',
    default: 'بلاگ اپ',
  },
  description: 'وب اپلیکیشن مدیریت بلاگ و نظرات کاربران',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={` ${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  )
}
