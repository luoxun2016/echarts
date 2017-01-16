package com.ank.echarts;

import org.mortbay.jetty.Server;
import org.mortbay.jetty.webapp.WebAppContext;

public class Bootstarp {
	
	public static void main(String[] args) {
		try {
			Server server = new Server(8080);
			WebAppContext appContext = new WebAppContext("webapp", "/");
			server.addHandler(appContext);
			server.start();
			server.join();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
