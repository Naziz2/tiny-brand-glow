
import { Home, ShoppingBag, User, Heart, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const categories = [
  { title: "Home", icon: Home, url: "#" },
  { title: "Shop", icon: ShoppingBag, url: "#shop" },
  { title: "Women", icon: User, url: "#women" },
  { title: "Men", icon: User, url: "#men" },
  { title: "Wishlist", icon: Heart, url: "#wishlist" },
  { title: "Account", icon: Settings, url: "#account" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="p-8 border-b border-gray-100">
        <h1 className="text-2xl font-sans font-light tracking-[0.2em] text-black">
          ATELIER
        </h1>
      </SidebarHeader>
      
      <SidebarContent className="p-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-4">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {categories.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-gray-50 text-black font-light tracking-wide">
                    <a href={item.url} className="flex items-center gap-4 py-3">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-4">Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-gray-50 text-black font-light tracking-wide">
                  <span className="text-sm py-2">Outerwear</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-gray-50 text-black font-light tracking-wide">
                  <span className="text-sm py-2">Knitwear</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-gray-50 text-black font-light tracking-wide">
                  <span className="text-sm py-2">Denim</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-gray-50 text-black font-light tracking-wide">
                  <span className="text-sm py-2">Shirting</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-gray-50 text-black font-light tracking-wide">
                  <span className="text-sm py-2">Accessories</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
