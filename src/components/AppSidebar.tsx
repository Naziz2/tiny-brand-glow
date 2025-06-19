
import { Home, ShoppingBag, User, Heart, Settings, Filter } from 'lucide-react';
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
    <Sidebar className="border-r border-tunisia-blue/20">
      <SidebarHeader className="p-6">
        <h1 className="text-2xl font-serif font-bold text-black">
          ATELIER
          <span className="text-bergandi-red">.</span>
        </h1>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-tunisia-blue font-medium">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-tunisia-blue/10 hover:text-tunisia-blue">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-tunisia-blue font-medium">Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-tunisia-blue/10 hover:text-tunisia-blue">
                  <span>Dresses</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-tunisia-blue/10 hover:text-tunisia-blue">
                  <span>Tops</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-tunisia-blue/10 hover:text-tunisia-blue">
                  <span>Bottoms</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-tunisia-blue/10 hover:text-tunisia-blue">
                  <span>Outerwear</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-tunisia-blue/10 hover:text-tunisia-blue">
                  <span>Accessories</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
