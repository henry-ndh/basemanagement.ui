import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Details } from '@based/config/SVGIcon';
import { ItemHeader } from './HeaderNav';
import { MenuHeader } from '@based/data/Data';

const MobileNav = () => {
  const path = window.location.pathname;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Details width="24px" height="24px" className="cursor-pointer md:hidden" />
      </SheetTrigger>
      <SheetContent className="w-[300px]">
        <div className="flex flex-col">
          {MenuHeader.map((item) => (
            <a href={item.link} className="">
              <ItemHeader key={item.name} className={`flex items-center gap-4 py-1.5 ${path == item.link ? `text-colorText` : ``}`}>
                {item.name}
              </ItemHeader>
            </a>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
