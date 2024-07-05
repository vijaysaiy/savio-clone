import {
  Activity,
  ArrowUpRight,
  ChevronRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import savioLogo from "@/assets/savia-logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
const productsList = [
  {
    label: "Winding machines",
    link: "/winding-machines",
  },
  {
    label: "Two-for-one twisting",
    link: "/two-for-one-twisting",
  },
  {
    label: "Air-jet Spinning",
    link: "/air-jet-spinning",
  },
  {
    label: "Shrinking & Bulking",
    link: "/shrinking-bulkin",
  },
];
const customerServiceList = [
  {
    label: "Academy",
    link: "/academy",
  },
  {
    label: "After Sales",
    link: "/after-sales",
  },
  {
    label: "Retrofitting",
    link: "/retrofitting",
  },
  {
    label: "Original Spare Parts",
    link: "/original-spare-parts",
  },
];
const endMarketList = [
  {
    label: "HOME-TEXTILES",
    link: "/home-textiles",
  },
  {
    label: "DENIM",
    link: "/denim",
  },
  {
    label: "FASHION",
    link: "/fashion",
  },
  {
    label: "KNITWEAR",
    link: "/knitwear",
  },
  {
    label: "ACTIVEWEAR",
    link: "/activewear",
  },
  {
    label: "TECHNICAL-TEXTILES",
    link: "/technical-textiles",
  },
];
const MainLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="#"
            className="flex items-center gap-2 text-lg font-semibold "
          >
            <div className="flex lg:h-16 lg:w-60 md:h-9 md:w-48">
              <img src={savioLogo} alt="logo" width="100%" height="100%" />
              <span className="sr-only">Savio Inc</span>
            </div>
          </Link>
          <div className="flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[250px] ">
                      {productsList.map((item) => (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link to={item.link}>
                              <span className="underline hover:no-underline">
                                {item.label}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <Separator className="my-1" />
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products"
                            className="flex items-center group"
                          >
                            <span className="underline group-hover:no-underline">
                              Products
                            </span>
                            <ChevronRight
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>End Market</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[540px] lg:w-[600px] grid-cols-[.75fr_1fr]">
                      {endMarketList.map((item) => (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link to={item.link}>
                              <span className="underline hover:no-underline">
                                {item.label}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <ul className="p-4">
                      <Separator className="mb-4" />
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/end-market"
                            className="flex items-center group"
                          >
                            <span className="underline group-hover:no-underline">
                              End Market
                            </span>
                            <ChevronRight
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Customer Service
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[250px] ">
                      {customerServiceList.map((item) => (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link to={item.link}>
                              <span className="underline hover:no-underline">
                                {item.label}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <Separator className="my-1" />
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/products"
                            className="flex items-center group"
                          >
                            <span className="underline group-hover:no-underline">
                              Customer Service
                            </span>
                            <ChevronRight
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link to="#" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from your store.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link to="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
