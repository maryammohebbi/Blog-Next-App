import Header from '@/components/Header'
import AuthProvider from '@/context/AuthContext'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
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
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
