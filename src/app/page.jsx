import Button from '@/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'خانه | اپلیکیشن مدیریت بلاگ ها',
}

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        اپلیکیشن مدیریت بلاگ
      </h1>

      <div>
        <p className="text-center">
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
          <br />
          بتونی بلاگ بسازی - کامنت بذاری و در پنلت همه‌ی اتفاقات رو رصد کنی!
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button variant="outline">
            <Link href="/blogs">مطالعه بلاگ ها</Link>
          </Button>
          <Button variant="primary">
            <Link href="/profile">مدیریت بلاگ ها</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
