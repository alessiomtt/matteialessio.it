"use client"

import * as React from "react"
import Link from "next/link"
import {
    Menu,
    Home,
    GraduationCap,
    Briefcase,
    ShieldCheck,
    Brain,
    Folder,
    Newspaper,
    Notebook,
    User,
    Mail,
    Phone,
    Search,
    Twitter,
    Linkedin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center max-w-[1400px] mx-auto px-4">
                {/* Left Section - Navigation Sheet */}
                <div className="flex flex-1 items-center justify-start">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hidden md:flex">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Explore</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle className="text-left">Explore</SheetTitle>
                                <SheetDescription className="text-left">
                                    Navigate through the sections.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                    <Home className="h-5 w-5" />
                                    <span className="font-medium">Home</span>
                                </div>

                                <Separator />

                                <h4 className="mb-1 text-sm font-medium leading-none text-muted-foreground">Servizi</h4>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <GraduationCap className="h-4 w-4" />
                                        <span>Formazione</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <Briefcase className="h-4 w-4" />
                                        <span>Consulenza</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <ShieldCheck className="h-4 w-4" />
                                        <span>Cyber Sec & OSINT</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <Brain className="h-4 w-4" />
                                        <span>AI ed Etica</span>
                                    </div>
                                </div>

                                <Separator />

                                <h4 className="mb-1 text-sm font-medium leading-none text-muted-foreground">Blog e progetti</h4>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <Folder className="h-4 w-4" />
                                        <span>Ultimi progetti</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <Newspaper className="h-4 w-4" />
                                        <span>Blog e notizie</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <Notebook className="h-4 w-4" />
                                        <span>Personal notes</span>
                                    </div>
                                </div>

                                <Separator />

                                <h4 className="mb-1 text-sm font-medium leading-none text-muted-foreground">Chi sono e contatti</h4>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <User className="h-4 w-4" />
                                        <span>Scopri chi sono</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <Mail className="h-4 w-4" />
                                        <span>Contatti</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                                        <Phone className="h-4 w-4" />
                                        <span>Prenota una call</span>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <span className="ml-2 text-sm font-medium hidden md:inline-block text-muted-foreground">Explore</span>
                </div>

                {/* Center Section - Logo */}
                <div className="flex flex-1 items-center justify-center">
                    <Link href="/" className="font-sans font-bold text-lg">
                        Alessio Mattei
                    </Link>
                </div>

                {/* Right Section - Utilities */}
                <div className="flex flex-1 items-center justify-end gap-2">
                    <ModeToggle />

                    <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[540px]">
                            <SheetHeader>
                                <SheetTitle>Cerca</SheetTitle>
                                <SheetDescription>
                                    Cosa stai cercando? Utilizza la barra di ricerca...
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex w-full max-w-sm items-center space-x-2">
                                    <Input type="search" placeholder="Cerca..." />
                                    <Button type="submit">Cerca</Button>
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="h-40 w-full rounded-md bg-muted/50 p-4 flex items-center justify-center border hover:bg-muted cursor-pointer transition-colors">
                                        <span className="text-muted-foreground">Placeholder 1</span>
                                    </div>
                                    <div className="h-40 w-full rounded-md bg-muted/50 p-4 flex items-center justify-center border hover:bg-muted cursor-pointer transition-colors">
                                        <span className="text-muted-foreground">Placeholder 2</span>
                                    </div>
                                </div>
                            </div>
                            <SheetFooter className="mt-8 sm:justify-start">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm text-muted-foreground">Seguimi qua:</span>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon">
                                            <Twitter className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Linkedin className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
